package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"haven/x/haven/types"
)

func (k msgServer) TipPost(goCtx context.Context, msg *types.MsgTipPost) (*types.MsgTipPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgTipPostResponse{}, nil
}
