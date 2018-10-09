import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import json, { SetAccessToken } from '../../utils/api';

export default class Register extends React.Component<IRegisterProps, IRegisterState>{

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dob: '',
            city: '',
            usstate: '',
            email: '',
            github: '',
            password: '',
        };
    }

    private registering = false;

    RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (this.registering) return;
        this.registering = true;
        try {
            let token = await json('/auth/register',
                'POST',
                this.state
            );
            SetAccessToken(token);
            this.props.history.push('/');
        } catch (e) {
            console.log(e);
        } finally {
            this.registering = false;
        }
    }

    render() {
        return (
            <main className="py-5">
                <div className="container py-5">
                    <form className="row" onSubmit={this.RegisterUser}>
                        <div className="col-md-4 offset-md-4">
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => { this.setState({ firstname: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => { this.setState({ lastname: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="Date of Birth (mm/dd/yyyy)" onChange={(e) => { this.setState({ dob: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="City" onChange={(e) => { this.setState({ city: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="State ID (AL, TX, TN, ...)" onChange={(e) => { this.setState({ usstate: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="GitHub Username" onChange={(e) => { this.setState({ github: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} required />
                                </div>
                            </div>
                            <div className="form-row form-group">
                                <div className="col">
                                    <button className="btn btn-primary btn-lg w-100">Register</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    Already have an account? <Link to="/login">Log in!</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

interface IRegisterProps extends RouteComponentProps { }
interface IRegisterState {
    firstname: string;
    lastname: string;
    dob: string;
    city: string;
    usstate: string;
    email: string;
    github: string;
    password: string;
}
