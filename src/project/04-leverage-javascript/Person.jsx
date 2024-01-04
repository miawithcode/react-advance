export function Person({ name, nickName, images }) {

  const img = images[0].small.url;

  return (
    <div>
      <img src={img} alt={name} style={{width:'150px'}} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
