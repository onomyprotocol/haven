package haven

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/onomyprotocol/haven/testutil/sample"
	havensimulation "github.com/onomyprotocol/haven/x/haven/simulation"
	"github.com/onomyprotocol/haven/x/haven/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = havensimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateHaven = "op_weight_msg_create_haven"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateHaven int = 100

	opWeightMsgCreatePost = "op_weight_msg_create_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePost int = 100

	opWeightMsgTipPost = "op_weight_msg_tip_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgTipPost int = 100

	opWeightMsgDeletePost = "op_weight_msg_delete_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePost int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	havenGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&havenGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateHaven int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateHaven, &weightMsgCreateHaven, nil,
		func(_ *rand.Rand) {
			weightMsgCreateHaven = defaultWeightMsgCreateHaven
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateHaven,
		havensimulation.SimulateMsgCreateHaven(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePost, &weightMsgCreatePost, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePost = defaultWeightMsgCreatePost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePost,
		havensimulation.SimulateMsgCreatePost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgTipPost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTipPost, &weightMsgTipPost, nil,
		func(_ *rand.Rand) {
			weightMsgTipPost = defaultWeightMsgTipPost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgTipPost,
		havensimulation.SimulateMsgTipPost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePost, &weightMsgDeletePost, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePost = defaultWeightMsgDeletePost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePost,
		havensimulation.SimulateMsgDeletePost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
