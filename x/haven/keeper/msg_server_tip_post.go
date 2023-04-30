package keeper

import (
	"context"
	"strconv"

	"haven/x/haven/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) TipPost(goCtx context.Context, msg *types.MsgTipPost) (*types.MsgTipPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	uid, _ := strconv.ParseUint(msg.Uid, 10, 64)

	tipAmount, _ := sdk.NewIntFromString(msg.Amount)

	tip := sdk.NewCoin("kudos", tipAmount)

	// Test if post exists
	post, found := k.GetPost(ctx, uid)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrPostDoesNotExist, "%s", msg.Uid)
	}

	post.Tips = post.Tips.Add(tip)

	k.SetPost(ctx, post)

	haven, _ := k.GetHaven(ctx, post.Haven)

	havenTip := (tip.Amount.Mul(sdk.NewIntFromUint64(haven.Rake))).Quo(sdk.NewInt(100))
	userTip := tip.Amount.Sub(havenTip)

	haven.Earnings = haven.Earnings.AddAmount(havenTip)

	return &types.MsgTipPostResponse{}, nil
}
