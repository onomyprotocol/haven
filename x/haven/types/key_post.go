package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PostKeyPrefix is the prefix to retrieve all Post
	PostKeyPrefix = "Post/value/"
)

// PostKey returns the store key to retrieve a Post from the index fields
func PostKey(
	uid uint64,
) []byte {
	var key []byte

	uidBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(uidBytes, uid)
	key = append(key, uidBytes...)
	key = append(key, []byte("/")...)

	return key
}
