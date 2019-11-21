function groupAnimals(animals) {
    // you can only write your code here!
    var sum = [];
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    //var i = [];
    var j = [];
    var k = [];
    var l = [];
    var m = [];
    var n = [];
    var o = [];
    var p = [];
    var q = [];
    var r = [];
    var s = [];
    var t = [];
    var u = [];
    var v = [];
    var w = [];
    var x = [];
    var y = [];
    var z = [];
    for(var i = 0; i < animals.length; i++){
        var char = animals[i][0];
        switch(char){
            case "a" :
                a.push(animals[i]);
                break;
            case "b" :
                b.push(animals[i]);
                break;
            case "c":
                c.push(animals[i]);
                break;
            case "d":
                c.push(animals[i]);
                break;
            case "e":
                e.push(animals[i]);
                break;
            case "f":
                f.push(animals[i]);
                break;
            case "g":
                g.push(animals[i]);
                break;
            case "h":
                h.push(animals[i]);
                break;
                // case "i":
                //     i.push(animals[i]);
                //     break;
            case "j":
                j.push(animals[i]);
                break;
            case "k":
                k.push(animals[i]);
                break;
            case "l":
                l.push(animals[i]);
                break;
            case "m":
                m.push(animals[i]);
                break;
            case "n":
                n.push(animals[i]);
                break;
            case "o":
                o.push(animals[i]);
                break;
            case "p":
                p.push(animals[i]);
                break;
            case "q":
                q.push(animals[i]);
                break;
            case "r":
                r.push(animals[i]);
                break;
            case "s":
                s.push(animals[i]);
                break;
            case "t":
                t.push(animals[i]);
                break;
            case "u":
                u.push(animals[i]);
                break;
            case "v":
                v.push(animals[i]);
                break;
            case "w":
                w.push(animals[i]);
                break;
            case "x":
                x.push(animals[i]);
                break;
            case "y":
                y.push(animals[i]);
                break;
            case "z":
                z.push(animals[i]);
                break;
        }

    }
    if(a.length !== 0){
        sum.push(a);
    }
    if(b.length !== 0){
        sum.push(b);
    }
    if(c.length !== 0){
        sum.push(c);
    }
    if(d.length !== 0){
        sum.push();
    }
    if(e.length !== 0){
        sum.push(e);
    }
    if(f.length !== 0){
        sum.push(f);
    }
    if(g.length !== 0){
        sum.push(g);
        }
    if(h.length !== 0){
        sum.push(h);
    }
    // if(i.length !== 0){
    //     sum.push(i);
    // }
    if(j.length !== 0){
        sum.push(j);
        }
    if(k.length !== 0){
        sum.push(k);
    }
    if(l.length !== 0){
        sum.push(l);
    }
    if(m.length !== 0){
        sum.push(m);
        }
    if(n.length !== 0){
        sum.push(n);
    }
    if(o.length !== 0){
        sum.push(o);
    }
    if(p.length !== 0){
        sum.push(p);
        }
    if(q.length !== 0){
        sum.push(q);
    }
    if(r.length !== 0){
        sum.push(r);
    }    
    if(s.length !== 0){
        sum.push(s);
        }
    if(t.length !== 0){
        sum.push(t);
    }
    if(u.length !== 0){
        sum.push(u);
    }
    if(v.length !== 0){
        sum.push(v);
        }
    if(w.length !== 0){
        sum.push(w);
    }
    if(x.length !== 0){
        sum.push(x);
    }if(y.length !== 0){
        sum.push(y);
        }
    if(z.length !== 0){
        sum.push(z);
    }
    return sum;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]