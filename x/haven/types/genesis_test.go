package types_test

import (
	"testing"

	"github.com/onomyprotocol/haven/x/haven/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				HavenList: []types.Haven{
					{
						Uid: 0,
					},
					{
						Uid: 1,
					},
				},
				PostList: []types.Post{
					{
						Uid: 0,
					},
					{
						Uid: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated haven",
			genState: &types.GenesisState{
				HavenList: []types.Haven{
					{
						Uid: 0,
					},
					{
						Uid: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated post",
			genState: &types.GenesisState{
				PostList: []types.Post{
					{
						Uid: 0,
					},
					{
						Uid: 0,
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
