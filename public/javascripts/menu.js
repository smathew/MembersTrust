function fixMenuIE( menuId ) {
	/*@cc_on
		if ( lteIE7 ) {
			var holder = $( menuId );
			var sfLIs = holder.getElementsByTagName( "li" );
			var li = null;
			for ( var i = 0; i < sfLIs.length; i++ ) {
				li = sfLIs[i];
				setupHandler( li, "mouseover", bindFunc( function() {
					addElementClass( this, "sfhover" );
				}, li ) );
				setupHandler( li, "mouseout", bindFunc( function() {
					removeElementClass( this, "sfhover" );
				}, li ) );
			}
		}
	@*/
}