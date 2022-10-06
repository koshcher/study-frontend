import { useEffect, useState } from 'react';
import Adder from '../Adder';
import Finder from '../Finder';
import ToggleLiked from '../ToggleLiked';
import ItemList from '../ItemList';
import Stats from '../Stats';

function App() {
  const [all, setAll] = useState([])
  const [filtered, setFiltered] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [startWith, setStartWith] = useState("")

  const loadAll = () => {
    const allStr = localStorage.getItem("all")
    if (allStr != null) {
      setAll(JSON.parse(allStr))
    }
  }

  // load posts at first launch
  useEffect(loadAll, [])


  useEffect(() => {
    if (isLiked) {
      setFiltered(all.filter(item => item.content.startsWith(startWith) && item.liked))
    } else {
      setFiltered(all.filter(item => item.content.startsWith(startWith)))
    }
  }, [startWith, all, isLiked])

  // write to local storage on update
  useEffect(() => localStorage.setItem("all", JSON.stringify(all)), [all])

  const addItem = (content) => setAll([...all, { content: content, liked: false }])

  const toggleItemLike = (index) => setAll(all.map((item, i) => index === i ? { ...item, liked: !item.liked } : item))

  const removeItem = (index) => setAll(all.filter((_, i) => i !== index))

  return (
    <div className="container col col-lg-6">
      <Stats posts={all.length} likes={all.filter(post => post.liked).length} />
      <div className="d-flex">
        <Finder start={startWith} setStart={setStartWith} />
        <ToggleLiked setLiked={setIsLiked} chooseLiked={isLiked} />
      </div>
      <ItemList like={toggleItemLike} remove={removeItem} items={filtered} />
      <Adder addItem={addItem} />
    </div>
  );
}

export default App;
