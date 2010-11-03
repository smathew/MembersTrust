# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_MembersTrust_session',
  :secret      => '4540cf8ab0a08a3eaef276c65c421b6a34512b99a67f3b59377a489e4e44edc975d68bf331c5c96c5ae8a547dd61f68bef80ffb6ff84159439cb8741b7f00ee7'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
