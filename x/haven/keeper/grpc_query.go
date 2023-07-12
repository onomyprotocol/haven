package keeper

import (
	"github.com/onomyprotocol/haven/x/haven/types"
)

var _ types.QueryServer = Keeper{}
