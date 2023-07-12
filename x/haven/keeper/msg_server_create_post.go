package keeper

import (
	"context"

	"github.com/onomyprotocol/haven/x/haven/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePost(goCtx context.Context, msg *types.MsgCreatePost) (*types.MsgCreatePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Test if haven exists
	havenUid := k.GetHavenUid(ctx, msg.Haven)
	if havenUid == 0 {
		return nil, sdkerrors.Wrapf(types.ErrHavenDoesNotExist, "%s", msg.Haven)
	}

	// Create the uid
	count := k.GetUidCount(ctx)

	post := types.Post{
		Uid:   count,
		Title: msg.Title,
		Body:  msg.Body,
		Owner: msg.Creator,
		Haven: havenUid,
		Tips:  sdk.NewCoin("kudos", sdk.NewInt(0)),
	}

	k.SetPost(ctx, post)

	k.IncUidCount(ctx)

	return &types.MsgCreatePostResponse{}, nil
}
