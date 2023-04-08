package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"haven/x/haven/types"
)

// SetHaven set a specific haven in the store from its index
func (k Keeper) SetHaven(ctx sdk.Context, haven types.Haven) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HavenKeyPrefix))
	b := k.cdc.MustMarshal(&haven)
	store.Set(types.HavenKey(
		haven.Uid,
	), b)
}

// GetHaven returns a haven from its index
func (k Keeper) GetHaven(
	ctx sdk.Context,
	uid uint64,

) (val types.Haven, found bool) {
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
