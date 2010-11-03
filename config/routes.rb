ActionController::Routing::Routes.draw do |map|
  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end

  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end

  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  # map.root :controller => "welcome"

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing or commenting them out if you're using named routes and resources.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
  
  map.connect '/', :controller => 'home', :action => 'index'
  map.root :controller => 'home'
  
  map.presmessage '/presmessage', :controller => 'home', :action => 'presmessage'
  map.faq '/faq', :controller => 'home', :action => 'faq'
  map.board '/board', :controller => 'home', :action => 'board'
  map.mission_statement '/mission_statement', :controller => 'home', :action => 'mission_statement'
  map.history '/history', :controller => 'home', :action => 'history'
  map.whocanjoin '/whocanjoin', :controller => 'home', :action => 'whocanjoin'
  map.rates '/rates', :controller => 'home', :action => 'rates'
  map.loans_auto '/loans_auto', :controller => 'home', :action => 'loans_auto'
  map.slc '/slc', :controller => 'home', :action => 'slc'
  map.slcr '/slcr', :controller => 'home', :action => 'slcr'
  map.atmdebit '/atmdebit', :controller => 'home', :action => 'atmdebit'
  map.privacy '/privacy', :controller => 'home', :action => 'privacy'
  map.browserreq '/browserreq', :controller => 'home', :action => 'browserreq'
  map.accts_checking '/accts_checking', :controller => 'home', :action => 'accts_checking'
  map.accts_savings '/accts_savings', :controller => 'home', :action => 'accts_savings'
  map.loans_heloc '/loans_heloc', :controller => 'home', :action => 'loans_heloc'
  map.loans_home '/loans_home', :controller => 'home', :action => 'loans_home'
  map.loans_visa '/loans_visa', :controller => 'home', :action => 'loans_visa'
  map.loans_other '/loans_other', :controller => 'home', :action => 'loans_other'
  map.eservices '/eservices', :controller => 'home', :action => 'eservices'
  map.annualreports '/annualreports', :controller => 'home', :action => 'annualreports'
  map.contact '/contact', :controller => 'home', :action => 'contact'
  map.holidays '/holidays', :controller => 'home', :action => 'holidays'
  map.fees '/fees', :controller => 'home', :action => 'fees'
  map.disclosures_funds '/disclosures_funds', :controller => 'home', :action => 'disclosures_funds'
end
