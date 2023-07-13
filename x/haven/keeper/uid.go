package keeper

import (
	"encoding/binary"

	"github.com/onomyprotocol/haven/x/haven/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// Get UID Count
func (k Keeper) GetUidCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.UidKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// Increment UID Count
func (k Keeper) IncUidCount(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.UidKey)
	bz := store.Get(byteKey)
	uid := binary.BigEndian.Uint64(bz)
	uid++
	binary.BigEndian.PutUint64(bz, uid)
	store.Set(byteKey, bz)
}
