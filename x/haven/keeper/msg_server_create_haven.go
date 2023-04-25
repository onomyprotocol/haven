package keeper

import (
	"context"

	"haven/x/haven/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateHaven(goCtx context.Context, msg *types.MsgCreateHaven) (*types.MsgCreateHavenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Test if haven exists
	haven, found := k.GetHaven(ctx, k.GetHavenUid(ctx, msg.Name))
	if found {
		return nil, sdkerrors.Wrapf(types.ErrHavenAlreadyExists, "%s", msg.Name)
	}

	// Create the uid
	count := k.GetUidCount(ctx)

	haven = types.Haven{
		Uid:     count,
		Name:    msg.Name,
		Owner:   msg.Creator,
		Balance: sdk.NewCoin("kudos", sdk.NewInt(0)),
	}

	k.SetHaven(ctx, haven)

	k.IncUidCount(ctx)

	return &types.MsgCreateHavenResponse{}, nil
}
