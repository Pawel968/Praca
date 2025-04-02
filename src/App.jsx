import './App.css'

const n_k = 1;
let x;
let y;
let sum1;
console.log(n_k);

function App() {

  return (
    <>
    
  <div class="div_1"> 
  <h1>Komputer ma numer - {n_k}</h1>
  </div>
  <br/>
  <br/>
  <div class="div_2">
    {n_k} * 1 = {n_k*1} <br/>
    {n_k} * 2 = {n_k*2} <br/>
    {n_k} * 3 = {n_k*3} <br/>
    {n_k} * 4 = {n_k*4} <br/>
    {n_k} * 5 = {n_k*5} <br/>
    {n_k} * 6 = {n_k*6} <br/>
    {n_k} * 7 = {n_k*7} <br/>
    {n_k} * 8 = {n_k*8} <br/>
    {n_k} * 9 = {n_k*9} <br/>
    {n_k} * 10 = {n_k*10} <br/>
    </div>
    <br/>
    <br/>
    <div class="div_3">
    <ul>
    <li>{sum1} = {n_k*x*x*x+1-n_k*y}</li>
    <li>2x+3{n_k}-4y<sup>2</sup> = {2*x+3*n_k-4*y*y}</li>
    <li>3y<sup>2</sup>-{n_k}x<sup>2</sup>y-7y = {3*y*y-n_k*x*x*y-7*y}</li>
    <li>2xy+{n_k}xy = {2*x*y+n_k*x*y}</li>
    <li>3x<sup>2</sup>+{n_k}y+2 = {3*x*x+n_k*y+2}</li>
    </ul>
    </div>
  

    </>
  )
}

export default App
