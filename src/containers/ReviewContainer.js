import React, {Component} from 'react';
import ReviewTable from '../components/ReviewTable.js';

class ReviewContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      reviews: "A great product for daily use, Great price. Takes about 10days for delivery Excellent value - will buy again Fine, I always use this, was as expected Good value excellent product, good value good does the job! Thank you Great it's that is easy to use I hated it arrived on time, excellent product, thank you quick service great price. good and refreshing My daughter is road testing this, but so far it's refreshing DO NOT BUY THIS PRODUCT Avoid Did not notice any difference Horrible taste Does its job and shows it works",
      cleanedArray: [],
      reviewWordFrequency: {},
      finalData: []
    }

    // this.tidyReviewData = this.tidyReviewData.bind(this);
    // this.createReviewArray = this.createReviewArray.bind(this);
    // this.addKeysToWords = this.addKeysToWords.bind(this);
  };

// componentDidMount(){
//     this.tidyReviewData;
//     this.createReviewArray;
//     this.addKeysToWords;
//   }
//   tidyReviewData(){
//     const data = this.reviews.replace(/[1234567890\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(/\s+/);
//     this.setState({cleanedArray: data});
//   }
//
//   createReviewArray(){
//     this.setState(this.updateState() => {
//     for (var i = 0; i < this.cleanedArray.length; i++) {
//     let review = this.cleanedArray[i];
//     if (!this.reviewWordFrequency[review]) {
//       this.reviewWordFrequency[review] = 1;
//     } else {
//       this.reviewWordFrequency[review]++;
//     }
//   }
// }
// )}
//
//   addKeysToWords(){
//     this.finalData = Object.keys(this.reviewWordFrequency).map(function (key) {
//       return {
//         name: key,
//         total: this.reviewWordFrequency[key]
//       };
//     });
//   }

  render(){

    return(
      <div>
      <h2>Word Frequency from Reviews</h2>
      <ReviewTable finalData={this.state.finalData} />
      </div>
    )
  }


}
export default ReviewContainer;
