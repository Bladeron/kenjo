export function filterByAlbum(albumData: Array<any>, artistId: string) {
  let filteredAlbumbs = albumData.filter(function (el) {
    return el.artistId == artistId;
  });
  return filteredAlbumbs;
}