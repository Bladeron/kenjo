export function addName(albumData: Array<any>, artistList) {
  let mapped = {};

  artistList.forEach((e) => {
    mapped[e._id] = e.name;
  });

  albumData.forEach((e) => {
    e.artistName = mapped[e.artistId];
  });

  return albumData;
}
