package keeper

import (
	"context"
	"strconv"

	"github.com/onomyprotocol/haven/x/haven/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) DeletePost(goCtx context.Context, msg *types.MsgDeletePost) (*types.MsgDeletePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	uid, _ := strconv.ParseUint(msg.Uid, 10, 64)

	post, found := k.GetPost(ctx, uid)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrPostDoesNotExist, "%s", msg.Uid)
	}

	haven, _ := k.GetHaven(ctx, post.Haven)

	if !(msg.Creator == post.Owner || msg.Creator == haven.Owner) {
		return nil, sdkerrors.Wrapf(types.ErrNotPostAdmin, "%s", msg.Uid)
	}

	k.RemovePost(ctx, uid)

	return &types.MsgDeletePostResponse{}, nil
}
