package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/onomyprotocol/haven/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateHaven_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateHaven
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateHaven{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "invalid rake",
			msg: MsgCreateHaven{
				Creator: sample.AccAddress(),
				Rake:    "invalid",
			},
			err: sdkerrors.ErrInvalidRequest,
		}, {
			name: "valid address",
			msg: MsgCreateHaven{
				Creator: sample.AccAddress(),
				Rake:    "1234",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
