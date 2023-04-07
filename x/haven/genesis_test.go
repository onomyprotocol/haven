package haven_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "haven/testutil/keeper"
	"haven/testutil/nullify"
	"haven/x/haven"
	"haven/x/haven/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HavenKeeper(t)
	haven.InitGenesis(ctx, *k, genesisState)
	got := haven.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
