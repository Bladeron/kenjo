export function filterByAlbum(albumData: Array<any>, artistId: string) {
  console.log('albumdata en ', albumData)
  let filteredAlbumbs = albumData.filter(function (el) {
    console.log(el)
    return el.artistId == artistId;
  });
  console.log('filtrados', filteredAlbumbs)
  return filteredAlbumbs;
}