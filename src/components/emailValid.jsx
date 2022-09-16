import React from "react";

class EmailValidComp extends React.Component{
     constructor(props){
          super(props)
          this.state = {
               email:"",
               password: "",
               isValid: false,
               isValid2: false,
               message: "",
               message2: "",
          };
          this.handleChangeEmail = this.handleChangeEmail.bind(this)
          this.handleChangePass = this.handleChangePass.bind(this)
     }
     handleChangeEmail(e){
          this.setState({
               email: e.target.value,
          })
     }
     handleChangePass(e){
          this.setState({password: e.target.value})
     }
     emailValidation(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return !(!this.state.email || regex.test(this.state.email) === false);
     }
     passwordValidation(){
          return !(!this.state.password || this.state.password.length <= 8)
     }
     handleSubmitLogin(){
          const isPassValid = this.passwordValidation();
          this.setState({
               isValid2: isPassValid,
               message2: isPassValid ? "" : "Invalid Password"
          },()=> this.props.onPassSubmit(this.state))
          if(this.state.isValid2){
               console.log(this.state)
          }
          const isEmailValid = this.emailValidation();
          this.setState({
               isValid: isEmailValid,
               message: isEmailValid ? "" : "Invalid Email"
          },()=> this.props.onEmailSubmit(this.state))
          if(this.state.isValid){
               console.log(this.state)
          }
     }
     handlePreventDef(e){
          e.preventDefault()
     }
     render(){
          return(
               <>
               <form className="frm" onSubmit={this.handlePreventDef}>
               <p className="validError">{this.state.message}</p>
               <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={this.handleChangeEmail} value={this.state.email} />
                    <p className="validError">{this.state.message2}</p>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={this.handleChangePass} value={this.state.password} />
                    <button type="submit" className="loginBtn" onClick={() => {this.handleSubmitLogin()}}>Sign Up</button>
               </form>
               </>
          )
     }
}

export default EmailValidComp