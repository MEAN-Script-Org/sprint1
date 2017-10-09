(function () {
  'use strict';
  
  angular
    .module('loanTracking')
    .controller('LoanTrackingController', LoanTrackingController) ;
  
  LoanTrackingController.$inject = ['$scope'] ;
  
  function LoanTrackingController($scope) {
    var vm = this ;
    
    /*
      var mongoose = require('mongoose') ;
      
      exports.do_test = function() {
      
      var loanSchema = new mongoose.Schema({
        verif_id: { type: Number,  required: true, unique: true },
        type: { type: String,  required: true }, 
        status: { type: String,  required: true },
        step: { type: String,  required: true },
        info: { type: String },
      });
      
      var Loans_Test = mongoose.model('test_loans', loanSchema);
      
      module.exports = Loans_Test ;
      
      Loans_Test.find( {}, function(err, loans) {
        if (err) throw err ;
        
        console.log(loans) ;
      }) ;
    */
  }
}());
