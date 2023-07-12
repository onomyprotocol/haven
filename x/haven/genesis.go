package haven

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/onomyprotocol/haven/x/haven/keeper"
	"github.com/onomyprotocol/haven/x/haven/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the haven
	for _, elem := range genState.HavenList {
		k.SetHaven(ctx, elem)
	}
	// Set all the post
	for _, elem := range genState.PostList {
		k.SetPost(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.HavenList = k.GetAllHaven(ctx)
	genesis.PostList = k.GetAllPost(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
