function Func(obj){var i,t,s="";t=[];t.Date=Date;t.Object=Object;t.Array=Array;for(i in t)s+=obj instanceof t[i]?"obj is an instance of "+i+"\n":"obj is not an instance of "+i+"\n";return s}