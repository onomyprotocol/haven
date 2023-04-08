package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HavenKeyPrefix is the prefix to retrieve all Haven
	HavenKeyPrefix = "Haven/value/"
)

// HavenKey returns the store key to retrieve a Haven from the index fields
func HavenKey(
	uid uint64,
) []byte {
	var key []byte

	uidBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(uidBytes, uid)
	key = append(key, uidBytes...)
	key = append(key, []byte("/")...)

	return key
}
