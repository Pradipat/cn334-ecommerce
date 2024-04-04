export default function Page({params}) {
const [mainCategory, subCategory] = params.category;
  return (
    <div>
      <h1>Page</h1>
      <p>Slugs: {mainCategory}</p>
      <p>Slugs2: {subCategory}</p>
      <p>Slugs0</p>
    </div>
  )
}


