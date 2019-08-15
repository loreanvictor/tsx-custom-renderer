import renderer from './renderer';


let F = (props) => <h1>{props.title}</h1>;
let x = <div>
  <span>{2}</span>
  {['hellow', 'world'].map(_ => <F title={_}/>)}
</div>;

renderer.render(x).on(document.body);