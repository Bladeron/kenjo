export function addName(albumData: Array<any>, artistList) {
  let mapped = {};

  artistList.forEach((e) => {
    mapped[e._id] = e.name;
  });

  console.log(mapped)

  albumData.forEach((e) => {
    e.artistName = mapped[e.artistId];
  });

  console.log('albumdata', albumData)

  return albumData;
}
