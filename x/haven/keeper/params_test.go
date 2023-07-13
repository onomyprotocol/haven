package keeper_test

import (
	"testing"

	testkeeper "github.com/onomyprotocol/haven/testutil/keeper"
	"github.com/onomyprotocol/haven/x/haven/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HavenKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
