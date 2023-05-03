package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/haven module sentinel errors
var (
	// ErrHavenAlreadyExists - haven with proposed name already exists
	ErrHavenAlreadyExists = sdkerrors.Register(ModuleName, 1, "the haven already exists") // nolint: gomnd
	// ErrHavenAlreadyExists - haven with proposed name already exists
	ErrHavenDoesNotExist = sdkerrors.Register(ModuleName, 2, "the haven does not exist") // nolint: gomnd
	// ErrPostDoesNotExist - post does not exist
	ErrPostDoesNotExist = sdkerrors.Register(ModuleName, 3, "the post does not exist") // nolint: gomnd
	// ErrNotPostAdmin - not post admin
	ErrNotPostAdmin = sdkerrors.Register(ModuleName, 4, "msg creator does is not post admin") // nolint: gomnd
)
