package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/onomyprotocol/haven/x/haven/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListHaven() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-haven",
		Short: "list all haven",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllHavenRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.HavenAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowHaven() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-haven [uid]",
		Short: "shows a haven",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argUid, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetHavenRequest{
				Uid: argUid,
			}

			res, err := queryClient.Haven(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
