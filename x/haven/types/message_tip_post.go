package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTipPost = "tip_post"

var _ sdk.Msg = &MsgTipPost{}

func NewMsgTipPost(creator string, uid string, amount string) *MsgTipPost {
	return &MsgTipPost{
		Creator: creator,
		Uid:     uid,
		Amount:  amount,
	}
}

func (msg *MsgTipPost) Route() string {
	return RouterKey
}

func (msg *MsgTipPost) Type() string {
	return TypeMsgTipPost
}

func (msg *MsgTipPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTipPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTipPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
