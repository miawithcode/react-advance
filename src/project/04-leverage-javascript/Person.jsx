export function Person({ name, nickName='Default', images }) {

  // const img = images && images[0] && images[0].small && images[0].small.url;

  const img = images?.[0]?.small?.url;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname : { nickName}</p>
    </div>
  );
}