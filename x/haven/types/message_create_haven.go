package types

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateHaven = "create_haven"

var _ sdk.Msg = &MsgCreateHaven{}

func NewMsgCreateHaven(creator, name string) *MsgCreateHaven {
	return &MsgCreateHaven{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgCreateHaven) Route() string {
	return RouterKey
}

func (msg *MsgCreateHaven) Type() string {
	return TypeMsgCreateHaven
}

func (msg *MsgCreateHaven) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateHaven) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateHaven) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = strconv.ParseUint(msg.Rake, 10, 64)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "prev uid is not an integer")
	}

	return nil
}
