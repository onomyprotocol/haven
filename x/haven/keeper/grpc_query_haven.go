package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"haven/x/haven/types"
)

func (k Keeper) HavenAll(c context.Context, req *types.QueryAllHavenRequest) (*types.QueryAllHavenResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var havens []types.Haven
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	havenStore := prefix.NewStore(store, types.KeyPrefix(types.HavenKeyPrefix))

	pageRes, err := query.Paginate(havenStore, req.Pagination, func(key []byte, value []byte) error {
		var haven types.Haven
		if err := k.cdc.Unmarshal(value, &haven); err != nil {
			return err
		}

		havens = append(havens, haven)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHavenResponse{Haven: havens, Pagination: pageRes}, nil
}

func (k Keeper) Haven(c context.Context, req *types.QueryGetHavenRequest) (*types.QueryGetHavenResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHaven(
		ctx,
		req.Uid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetHavenResponse{Haven: val}, nil
}
