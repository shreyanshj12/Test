import React from 'react'
import img1 from '../../images/img1.jpg';
import 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
/**
* @author
* @function Info
**/

const Info = ({ data }) => {
    return (
        <div>
            <div className='ipv'>
                <h4 className='ipv-data'>IPV / 5962101642766</h4>
            </div>

            <div className='product-container'>
                {data.map((product) => {
                    const {
                        wid,
                        vertical,
                        brand,
                        brand_code,
                        size,
                        sfi,
                        idealfor,
                        bd_color,
                        color_code,
                        color,
                        style_code,
                        comment,
                        mrp,
                        offers,
                        offers_desc,
                        img
                    } = product;

                    // console.log(typeof (img));
                    // console.log(typeof (img1));
                    // console.log(img);
                    // console.log(img1);
                    return (
                        <div key={wid}>
                            <img src={img1} className='image' />
                            <div className='product-info'>

                                <p className='details'><b>Product: </b>{`${brand}, ${style_code}, ${size}, ${idealfor}, ${bd_color}, ${color_code}, ${color}, ${mrp}`}</p>
                                <p className='details'><b>WID/WSN: </b>{`${wid}`}</p>
                                <p className='details'><b>Vertical: </b>{`${vertical}`}</p>

                            </div>
                            <div className='container' style={{ width: '50%', marginTop: '5%', overflow: 'auto' }}>
                                <Table bordered responsive="sm" style={{}}>
                                    <tbody>
                                        <tr>
                                            <td style={{ paddingRight: '130px' }}>Brand</td>
                                            <td>{brand}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand Code</td>
                                            <td>{brand_code}</td>
                                        </tr>

                                        <tr>
                                            <td>Size</td>
                                            <td>{size}</td>
                                        </tr>

                                        <tr>
                                            <td>Size for inwarding</td>
                                            <td>{sfi}</td>
                                        </tr>

                                        <tr>
                                            <td>Ideal for </td>
                                            <td>{idealfor}</td>
                                        </tr>

                                        <tr>
                                            <td>Comment</td>
                                            <td>{comment}</td>
                                        </tr>

                                        <tr>
                                            <td>MRP</td>
                                            <td>{mrp}</td>
                                        </tr>

                                        <tr>
                                            <td>Offers</td>
                                            <td>{offers === 'null' ? 'null' : `${offers}`}</td>
                                        </tr>

                                        <tr>
                                            <td>Offers Description</td>
                                            <td>{offers_desc === 'null' ? 'null' : `${offers_desc}`}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand</td>
                                            <td>{brand}</td>
                                        </tr>

                                        <tr>
                                            <td>Style Code</td>
                                            <td>{style_code}</td>
                                        </tr>

                                        <tr>
                                            <td>Size</td>
                                            <td>{size}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div className='dropdown'>
                                <label for="cars">Choose a car:</label>
                                <select className='drop-down' name="cars" id="cars">
                                    <option className="drop-down" value="noissue">No issues</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>

                            </div>
                        </div>

                    );

                })}

            </div>
        </div >
    );

}
export default Info;