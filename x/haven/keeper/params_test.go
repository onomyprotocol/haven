package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "haven/testutil/keeper"
	"haven/x/haven/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HavenKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
