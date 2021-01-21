// import React, { Component } from 'react';
// // import Login from '../Pages/Login';
// import Navbar from './Navbar';
// import HeroSection from './HeroSection';

// class Container extends Component {
//     state = {
//         currentPage: 'HeroSection'
//     };

//     handlePageChange = page => {
//         this.setState({ currentPage: page });
//     };

//     renderPage = () => {
//         if (this.state.currentPage === 'HeroSection') {
//             return <HeroSection />;
//         } else if (this.state.currentPage === 'Login') {
//             return <Login />
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <Navbar 
//                 currentPage={this.state.currentPage}
//                 handlePageChange={this.handlePageChange}
//                 />
//                 {this.renderPage()}
//             </div>
//         );
//     }
// }

// export default Container;