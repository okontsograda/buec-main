async function getMinistries() {
  const res = await fetch ('https://www.admin.buec.life/api/event');
  return await res.json();
}

const Events = async () => {
  const ministries = await getMinistries();
  console.log();

  return (
    <>
      <h2 className="text-center mt-48">
        {ministries.data.map( (ministry) => {
          return (
          <div>
            Ministry: {ministry.attributes.Name}
          </div>
          )
        })}
        {/* Ministries: {ministries.data[0].attributes.Name} */}
      </h2>
    </>
  )
}

export default Events