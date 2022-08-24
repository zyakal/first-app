export default function movie({ data }) {
  return (
    <div key={data.id}>
      <h2>
        <a href="">{data.title}</a>
      </h2>
      <img src={data.medium_cover_image} alt={data.title} />
      <p>{data.summary}</p>

      <ul>
        {data.genres.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
