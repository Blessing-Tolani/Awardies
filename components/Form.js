import Style from "../styles/header.module.css";

import Main from "../components/Main";


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        value:''
        };
        this.valueChange = this.valueChange.bind(this);
    }
    valueChange(event){
        this.setState({
            value:event.target.value
        });
    }
    
    formSubmit(event){
        event.preventDefault();
        let search = this.state.value;
        <Main name = {search}/>
    }
    render(){
        let search = this.state.value;
        if(search == ''){
           search = "merlin";
           
        console.log(search);
        }
        return(
            <>
           
            <div className = {Style.formdiv}>
                <form  className = "flex justify-around items-center h-full px-5"  autoComplete="off" onSubmit = {this.formSubmit}>
                    <button className = {Style.search}> <FaSearch /></button>
                    <input className =" placeholder-gray-500 " value = {this.state.value} onChange = {this.valueChange} type="text" id={Style.picturetype} name="picturetype" placeholder="Search for your favourite movies" pattern = "[a-zA-Z1-9/ ]+" title =  'Only Alphabets, Number and Space Required'/>
                
                    <div className = {Style.dropdown}>
                        <button className = {Style.search}><span id = "put" className = " text-black pr-2 sm:pr-4 text-sm">all</span>< FaSortDown className = "inline mb-1 text-gray-500 bg-color-white hover:text-gray-900" /></button>
                        <div className={Style.dropdowncontent}>
                            <a  className = "hover:text-gray-900"  href="#">all</a>
                            <a  className = "hover:text-gray-900" href="#">movie</a>
                            <a  className = "hover:text-gray-900" href="#">series</a>
                            <a  className = "hover:text-gray-900" href="#">episode</a>
                        
                        </div>
                    </div>
                    
                
                </form>
                <div className = "text-gray-400 pl-10">
                    <p className = "com text-shopify sm:text-sm">Common: movies series episode  </p>
                </div>
            </div>
            <Main topic = {search}/>
            </>
        )
    }
}