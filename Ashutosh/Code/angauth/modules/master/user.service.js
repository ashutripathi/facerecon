'use strict';

angular
		.module('Master')
		.factory(
				'UserService',
				[	
						'$Scope',
						'$http',
						'$cookieStore',
						'$rootScope',
						
						function($http, $cookieStore, $rootScope,
								$Scope) {
							var service = {};

							service.GetAll = function(sessionId, callback) {

								/* Use this for real authentication */
								$http
										.post(
												"http://localhost:8080/SRA/customer/list",
												{
													"sessionId" : sessionId
												}).success(function(response) {
											callback(response);
										})

							};

							service.GetById = function(sessionId, customerId,
									callback) {

								/* Use this for real authentication */
								$http
										.post(
												"http://localhost:8080/SRA/customer/details",
												{
													"sessionId" : sessionId,
													"customerid" : customerId
												}).success(function(response) {
											callback(response);
										})

							};

							service.UpdateNotes = function(sessionId,
									customerid, status, notes, callback) {

								/* Use this for real authentication */
								$http
										.post(
												"http:localhost:8080/SRA/customer/savenotes",
												{
													"sessionId" : sessionId,
													"customerid" : customerid,
													"status" : status,
													"notes" : notes
												}).success(function(response) {
											callback(response);
										})

							};

							service.UpdateVisits = function(sessionId,
									customerid, date, time, action, notes,
									callback) {

								/* Use this for real authentication */
								$http
										.post(
												"http:localhost:8080/SRA/customer/savenotes",
												{
													"sessionId" : sessionId,
													"customerid" : customerid,
													"visit" : {
														"date" : date,
														"time" : time,
														"action" : action,
														"notes" : notes
													}
												}).success(function(response) {
											callback(response);
										})

							};

							service.LogOut = function(sessionId,
									callback) {

								/* Use this for real authentication */
								$http
										.post(
												"http://localhost:8080/SRA/logout",
												{
													"sessionId" : sessionId
												}).success(function(response) {
											callback(response);
										})

							};

							return service;
						} ])
