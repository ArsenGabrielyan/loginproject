import React from "react";

class SignUpFormComp extends React.Component{
     constructor(props){
          super(props)
          this.state = {
               name: "", email: "", username: "", pass: "", confirmPass:"", agreed: false,
               isValidName: false, isValidEmail: false, isValidUsername: false, isValidPass: false, isPassConfirmed: false, isCheckboxChecked: false,
               msgName: "", msgEmail: "", msgUsername: "", msgPass: "", msgConfirmPass: "", msgCheckbox: ""
          };
          this.handleChangeName = this.handleChangeName.bind(this)
          this.handleChangeEmail = this.handleChangeEmail.bind(this)
          this.handleChangeUsername = this.handleChangeUsername.bind(this)
          this.handleChangePass = this.handleChangePass.bind(this)
          this.handleChangeConfirmPass = this.handleChangeConfirmPass.bind(this)
          this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
     }
     handleChangeName(e){
          this.setState({name: e.target.value})
     }
     handleChangeEmail(e){
          this.setState({email: e.target.value})
     }
     handleChangeUsername(e){
          this.setState({username: e.target.value})
     }
     handleChangePass(e){
          this.setState({pass: e.target.value})
     }
     handleChangeConfirmPass(e){
          this.setState({confirmPass: e.target.value})
     }
     handleChangeCheckbox(e){
          this.setState({agreed: e.target.checked})
     }
     nameValid(){
          return !(!this.state.name || this.state.name.length <= 2)
     }
     usernameValid(){
          return !(!this.state.username || this.state.username.length <= 2)
     }
     emailValid(){
          const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return !(!this.state.email || regex.test(this.state.email) === false);
     }
     passValid(){
          return !(!this.state.pass || this.state.pass.length <= 8)
     }
     confirmPassValid(){
          return !(!this.state.confirmPass || this.state.pass !== this.state.confirmPass)
     }
     checkBoxValid(){
          return !(!this.state.agreed)
     }
     handleSubmitSignUp(){
          const isNameValid = this.nameValid()
          const isEmailValid = this.emailValid()
          const isUsernameValid = this.usernameValid()
          const isPasswordValid = this.passValid()
          const isConfirmPassValid = this.confirmPassValid()
          const isCheckBoxValid = this.checkBoxValid()
          this.setState({
               isValidName: isNameValid,
               msgName: isNameValid ? "" : "Invalid Name"
          }, ()=> this.props.onNameSubmit(this.state))
          this.setState({
               isValidEmail: isEmailValid,
               msgEmail: isEmailValid ? "" : "Invalid Email"
          }, ()=> this.props.onEmailSubmit(this.state))
          this.setState({
               isValidUsername: isUsernameValid,
               msgUsername: isUsernameValid ? "" : "Invalid Username"
          }, ()=> this.props.onUsernameSubmit(this.state))
          this.setState({
               isValidPass: isPasswordValid,
               msgPass: isPasswordValid ? "" : "Invalid Password"
          }, ()=> this.props.onPasswordSubmit(this.state))
          this.setState({
               isPassConfirmed: isConfirmPassValid,
               msgConfirmPass: isConfirmPassValid ? "" : "Password Doesn't Match"
          }, ()=> this.props.onConfirmPassSubmit(this.state))
          this.setState({
               isCheckboxChecked: isCheckBoxValid,
               msgCheckbox: isCheckBoxValid ? "" : "You Need To Accept the Terms"
          },()=> this.props.onCheckboxSubmit(this.state))
          if(this.state.isValidName && this.state.isValidEmail && this.state.isValidUsername && this.state.isValidPass && this.state.isPassConfirmed && this.state.isCheckboxChecked){
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
                    <p className="validError">{this.state.msgName}</p>
                    <label htmlFor="name" className="labelBox">Full Name</label>
                    <input 
                    type="text" 
                    name="name"  
                    id="fullName" placeholder="Name..." className="inputBox" 
                    onChange={this.handleChangeName} value={this.state.name} />
                    <p className="validError">{this.state.msgEmail}</p>
                    <label htmlFor="email" className="labelBox">Email</label>
                    <input type="email" name="email"  id="email" placeholder="Email address..." className="inputBox" onChange={this.handleChangeEmail} value={this.state.email} />
                    <p className="validError">{this.state.msgUsername}</p>
                    <label htmlFor="username" className="labelBox">Username</label>
                    <input type="text" name="username"  id="userName" placeholder="Username..." className="inputBox" onChange={this.handleChangeUsername} value={this.state.username}/>
                    <p className="validError">{this.state.msgPass}</p>
                    <label htmlFor="pass" className="labelBox">Password</label>
                    <input type="password" name="pass"  id="password" placeholder="****************" className="inputBox" onChange={this.handleChangePass} value={this.state.pass} />
                    <p className="validError">{this.state.msgConfirmPass}</p>
                    <label htmlFor="confirmPass" className="labelBox">Repeat Password</label>
                    <input type="password" name="confirmPass" id="confirmPassword" placeholder="****************" className="inputBox" onChange={this.handleChangeConfirmPass} value={this.state.confirmPass}/>
                    <span className="agreedCheckBox">
                         <p className="validError">{this.state.msgCheckbox}</p>
                         <input type="checkbox" name="agreed" className="agreeCheck" checked={this.state.agreed} onChange={this.handleChangeCheckbox}/>
                         <label htmlFor="agreed" className="agreeText">I agree to the <span className="midBold">Terms of User</span></label>
                    </span>
                    <button type="submit" className="loginBtn" onClick={() => {this.handleSubmitSignUp()}}>Sign Up</button>
               </form>
               </>
          )
     }
}

export default SignUpFormComp