package keeper

import (
	"encoding/binary"

	"github.com/onomyprotocol/haven/x/haven/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetHaven set a specific haven in the store from its index
func (k Keeper) SetHaven(ctx sdk.Context, haven types.Haven) {
	storeHaven := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenKeyPrefix))
	b := k.cdc.MustMarshal(&haven)
	storeHaven.Set(types.HavenKey(
		haven.Uid,
	), b)

	storeName := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenNamePrefix))
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, haven.Uid)
	storeName.Set(types.HavenNameKey(
		haven.Name,
	), bz)
}

// GetHaven returns a haven from uid
func (k Keeper) GetHaven(
	ctx sdk.Context,
	uid uint64,
) (val types.Haven, found bool) {
	if uid == 0 {
		return val, false
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenKeyPrefix))

	b := store.Get(types.HavenKey(
		uid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetHaven returns a haven from uid
func (k Keeper) GetHavenUid(
	ctx sdk.Context,
	name string,
) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenNamePrefix))

	b := store.Get(types.HavenNameKey(
		name,
	))
	if b == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(b)
}

// RemoveHaven removes a haven from the store
func (k Keeper) RemoveHaven(
	ctx sdk.Context,
	uid uint64,
) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenKeyPrefix))
	store.Delete(types.HavenKey(
		uid,
	))
}

// GetAllHaven returns all haven
func (k Keeper) GetAllHaven(ctx sdk.Context) (list []types.Haven) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Haven
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
