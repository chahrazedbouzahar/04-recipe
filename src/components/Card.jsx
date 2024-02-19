import { useNavigate} from "react-router-dom";   
export default function ({recipe}){
    const{image,name,tag,numberofMinutes,id}= recipe
    const navigate =useNavigate()
    const navigateToRecivePage= ()=> {
      navigate(`/recipe/${id}`)
    }
    return (
       
  <div className="card" onClick={navigateToRecivePage}>
    <img src={image} alt="" />
    <div className="card-content">
    <h3>{name}</h3>
    <div className="card-info">
      <div className="tag">
        <p>{tag}</p>
      </div>
      <p className="time-text">{numberofMinutes} minuts</p>
        </div>
    </div>
      
  </div>
       
    );
}