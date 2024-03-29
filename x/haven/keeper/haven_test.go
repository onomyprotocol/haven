package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/onomyprotocol/haven/testutil/keeper"
	"github.com/onomyprotocol/haven/testutil/nullify"
	"github.com/onomyprotocol/haven/x/haven/keeper"
	"github.com/onomyprotocol/haven/x/haven/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNHaven(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Haven {
	items := make([]types.Haven, n)
	for i := range items {
		items[i].Uid = uint64(i) + 1

		keeper.SetHaven(ctx, items[i])
	}
	return items
}

func TestHavenGet(t *testing.T) {
	keeper, ctx := keepertest.HavenKeeper(t)
	items := createNHaven(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetHaven(ctx,
			item.Uid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}

func TestHavenRemove(t *testing.T) {
	keeper, ctx := keepertest.HavenKeeper(t)
	items := createNHaven(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveHaven(ctx,
			item.Uid,
		)
		_, found := keeper.GetHaven(ctx,
			item.Uid,
		)
		require.False(t, found)
	}
}

func TestHavenGetAll(t *testing.T) {
	keeper, ctx := keepertest.HavenKeeper(t)
	items := createNHaven(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllHaven(ctx)),
	)
}
