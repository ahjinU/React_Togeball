import { styled } from "styled-components";
import { Button } from "../..";

const Mainwrapper = styled.div`
  display: flex;
  width: 30%;
  height: 250px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 5px 5px 5px gray;
`

const WrapImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    
`
const WrapTxtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    
`

const ImgWrapper = styled.img`
    width: 45%;
    
`
const TextWrapper = styled.p<Textprops>`
    font-size: 20px;
    text-align: center;

`

const OpenChatCard = ( props: Textprops ) => {
    const {
        children, time, person, type = 'date', color = 'lightgrey', 
    } = props

    return(
        <Mainwrapper>
            <WrapImgWrapper>
                <ImgWrapper src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACwCAMAAADdaLnuAAAA9lBMVEX////dAzAAKFfExccAJlbgAzD8/PzIycsAKVj4+Pn09PXMzc/19fXu7u/e3uDt7e7R0tTm5ufLCDXL0dmutsOAGEVke5bUBzM1I1HbBDHX19lOaYiXFUHCytTj4+UTOmWRFUIKM19IIE7U2+OpETy4CTctJFJPG0lziaM8VXfQBzSBgoTCCze6u75rG0e5ws6gEj4YJFOcnaF/jKGNjpEeP2iRnrCfqbksS3F/k6uyDjqur7JEXn9fHUqTlJgzTnJ0GkZaHkuIFUKlEDxzeIFlHElacIyboq5GHEtdaHlOXnOjssKWnqt4hJeGkaB7hpc/Um14eoF6uvNXAAAgAElEQVR4nO1dC1viyNLG2MQkChEIEUQSAsrFRWLMJASNAjpmdsfVb/b//5mvqnPrBPB2ZnT2ebbOWUdDSPrtqq5bV3cXCv/Rf/QfvUS8JFd6tbYZUbvW00oS/9mt+rkkyj1zOgxa/lw3EhIMfe631OG03ZPFz27hTyBe6imzYKTrhkCAOJbwAgHA+kidmT3ps5v6v5BYVmzfMTjC5TDmiQi605qZ2r+Tt2LPDTzjJYwMgznDC6a9fxtYvjdtOQK3ipKkFP6VZa3gtablf5GWkpXAEVgQCTRh6CakcpznOQb9hKR3Gp5qlj4bwauIL7u+wXKTCE5r6M7UuQBIzUoFNa0oVyoPnKGUeuZs2HJ0g+kXEGN/qv32jOV7tmdkhdYY1iRZ5nnN1TnQPI7XLhQUx3F0zghmyqHIS1oN9DP7LWLM7d5vjRVxCrmRabhiQZl7dqnATxENMUxAKpBIVue9QqFnlkttHTjOjGzBs8ufDWczIc68EiKqWGg7YDeHYkEK8NMQafyxVykUZoIzh28KQ8WeJ+Ob/L5YtVmCk3AJZwEXb1OAKLTGClJfLPBqqJXmALoCyiy2TIDVlT8b1SpJD/MUne8GCc+0gujTlrvAdIfkkT4WCqV5KMo2aKpaZa82mxvpk5TfzMDyNUajCG6p0DZipHJBHFHbGRQK5RWkiJ9e5Ti9VijUnLkN+stNoBJd7X02OJZKrscMTQFaX/JJMg5BOvG3Fr+Gp4JSKKAywp4QUc4J5wQPNqPWhPn093GJaxkTAWMPLL8b/YGcUujHIJzmyjh1evGtiLlgtgzq9XPs44zgN2GrOPVybh8qn54TXbP5QqkFzQfIq7qXjEDlDCnLUR/1KlJ71U5x3PzhdxitmmqsWJYhXxCDSHwdANbzHW/Ki25oT21FeYyRtpI7oUekAEepNtXzSOE7lc/GWWj7qyxAhUvZBoIocJ4iFaSeJmrDqEsECMPjO0dmr+aRSMrbOuH0QDFXkMJ3WrXPxckr3mqrgAUw5jQPHVhXFcDpcxVzOpyvdgmi1nWBQoaxbXOU5/q6G7m5+ZnuoeSu6X4u0qPuaNguSa5AffYXA1V9Khd6Q/Q9Nt3nuJ83WOXhyhCNkKJK5UsQjPvru2INGSO3J2rTlrHpBmLMPsvcaOpaMUMCk8prNErNtHWFMh9yjqrIkjnfyHxj+DnOodZacedTcmw1ddZpIknQdcdXHxkKfAjdBCYOh9BmZCvOxodygvoZKrjc2sjRmEfJL4YOGL+dnW3v7OwmtLOzfXb2DfDqTOCe8xryzxQC7cOBav6zOJnGAcpvyjYiW0e7O9vK38HIEFL+P0dC66Ohai9wNGw0mEffvtqOQAIf9/f3D5GSCxHe7W+PI/0FkBEFHztWXxLdEKjhPX7bjjDtH5bLZS2ifSrE++Xy4eH+/m4MVl2N49c89GPHqhy82CLA6T+dhTABpVZhqLy7S2GXKQFaytvdnbOnkfFifhigflzqsLTZvMTNIUbrG5Va4FwGJZC2u3OI/yBlwe5s/+1vMNEsVPuj7KpovyRlwM9QbPcPGZgypYpc3tmNrzJYD/cTrC9A5Qz3gxzD1VgjT6O/t0N2shATqpQ1+FEJIa5iPXta50tnSFc+BGj7GdOO/OScxzNo8u5hmYVZYijEG2qi8hq+nqn6CzNW3kdENr3R8/0t+FcpP7MgJaAE7SGINhgdjZHhwwTrt9ELbon/6xVwKXi2DcT5PxTcFGcCMUslGKxhP7DjNYV69vi8ZhKGe78YKO8+qy+E0TdkKNVDMc4Q2p60h/+H/+ifld1dLRbkCGsiwRTr9guj1Zj+Yq3Udp7raiE4ixnKwgwxZkjeL8eyHGHNsXV758p/TsX/6qFa8Z97uf6ILvxhgjOCiSRmCC6UkM2l0GvKsPUwYus2KKZnvf3Wr3QgxDARuyn8fkLJTRiawAzR8QmlcEP9SwdsBuo+hbq9/X/P6eBfalVl17bVlufpa+SKeDhEUZcmDI1h8itNCuHK4CwhLLm0CerTM1CJ84tNDS+WtLarznN5rRDoYayHUpyrMOMHlfZ3DkugoEoSHa3roT6nF4Jf4BXyoiRrWq/Wg0FFq6V4uT1kU9AU6G5ZCsWTwfnMM8GilqgQU9UUsnUF6t/PQDWmPxdlqae4djD3PM9xHPjpq7OHGmqDnpsk74nzDXGmKF7ECSQfSgVejLCugbobCfBm+R39vLCcLz8MR54h4Gy1FRJOXQvOfGhCRNyL8vcIdL+Ec+IP9qPt1kSUghdwAtGsphTprwzUw1dBNZyfpZRkBYJjgVj9waLeOb88Qbo879SvGxYRDH8qxwlf/WnncK/A11RHQNLVMkB93Tv4Mo3KNWkFKsrv7jZq4PXGhjjK4U+p6OF77sjgSP++c3La3CoytNU8PeksLZzG5XnFgYDxcedQBNSOQBr3i0mXcP6rxUrb3QVAu6EfkYcaMvVMXetC6D9plJZxLt+6Pq82AdoKFYvNk0Wf0+0SuIdCsA0cLQ0N0j2HTtk6OLKwquFVBBZVE8GFkOKxSjVwZqienZ211omuKxbMGZL7v6hg2Z0Df+onzTUoY7BbJ9dEGEqS6p/tyuBUGGRxGt5ePKJJ/FdQaXeHCiCPeimByjIVoW5frWa7jdlewfSw3IUL3u/sizhh2+hUt1icRcpblsHFg7oFjop2tnPIFxSd1JvxB9WG8bpYWdqPRtpmqMjU7b9zWokYM7FQm3P9P7sEp+DfSdpQ56x6NcPOYrN6d7uYTOp3p8z1Zp14PRhqpYLsk/tmer0rzF73rlBBo3+xt8dCjbJLifw+ZvwUooPotudcY1wcW3r7nTh5cySQ65OsqFbPr/vRzG/3krl+2gBIEvBFMfrjIovUfsMrxTALHI5VqpVySuns7CqTSHemIdCTYvGcTqa/h0CDkv7RQYah43qDVuAOZ3bgcP2T9MNinWtJBVpStGyyHfBK6aUUGpqdXVlckd+Uqd+YnM7cLERAt7YWgvo+SyPbBjfIMLR4egs4vaGpoRsotkccI6bFI87DnLrUIh0G/6X1Bu+b1wAkwpPEnPyyTE3l12j16Aw1BXrQEN5nbLRAsBbsSNxqHsOYH7lpvSLIaZVFOkfHsOSTc0Z4r9/gfPMVCNvCXyOtlGUqnapC+Y30rzMDRe86XBeBFk/e0qcM9XzB6jBSSNUr57isH1B2rMsEFEhvgJYTeHqUXjwiuvnqd/KHu3GJK/8sU5/Q8zRabb5QAdM9oGqh2KFlA+8AylnnGckdD4gRZDut4pDjBNRBpGT5IblOeuj89Y4D0l4ltKh8AnWFqduhUiKG/wBBQdsXyCQUvOa18PgOoFqL9I9ZoFuXDVBzOTmsOVaiZYt3sfAohnWE5rcIw9p6z3xYBaeoNBmhrjA1FN+zb6oC/NNsUIpHUbdW+29RfTHJMEaPMzr3uCGMVipGpkbjNL6h2uXUkHuSKlj1k2r1pNN913SuHOW59ximZr3fQ3kPmlKZgg0cxIYOVJ+hokP4phdKQyMnund9wV9x6qSAm8Q3VAdphkMLDBrXEcF5R6nqXvmwjNAqNO2ylwpwgnRXpMs1RgbpdxIbWKxjxTtHvLcUAmNB9W0G6GV/3QS0okeML6JW1h+SD0qur0PgOnpXWTmfy8EkyTWpVClT8T3k+anvCFx/wXoot38CWaT1lvqdtkcmGa170lgHFHzN6ya6wKfnELd5StpAXqzUTLNWEYEra8EwOQgmIcrHn+Wv0Zvoh3uV/Z1trVCZE6tRH2/lg46DrpH3fMX4u2tI9rnuKft9GIKj1XgEoofuuFm9PLpvEKIzWrkyDVoJ5ZVEqaa4Kv1kqGg8BL7prfQR4rDFklqWa8qQPi+wlZqEwg2utalb5werISSYVCP1fCWtrdhhUwL7oV1ZzUq6BmMlUS4WxFnxnCHsJlx32W1YhBiOaiZamTd9Iy0yEjJIS+bQ141wWRsRDG9oO0J6L43uyl6mSMkIRlhZSOuVBENvuZUCX+ILrtBt5mFuUes9ijwPqTYLPPhq+HysT5xTdc1SzSH1zNfPrdXEmzjVw9Zi0U1mXZbpkf6kE9IkE5vK05YOEX1jcF+HzxbLPpboNxbRvV3iY2+BibrtxNTnoKFWd4nPu50soVcNagDEFteYIN2lcnuLfzdI6PnKD/gq0u8u7/H59ftlFzniK6yZFNW87DZi85ES+P7e3G8Fw6nZkzNSoY1I9yROwNRJK8Nrzhp0Lk+b4YfN6lGDLKrRrc0BDXl4W1gm6RtwZOELJwfxF04vF30au5TDHBUn3Caa98TC7J1AeVJ6wFd168fj+KvF5sH4/NriDLYEBFh6npPd+YriltrtcqW0bqC7QiNRiGzAVrEdYi0u2fxMsTi+i41EcdzHquaC5HNp6y8b18eZ0VjcGi+xSLj8ZAMFhpWEUhhePMK1Jy0sG4dXHRQzAxnQXt5bjH0XVaF7kBvkb4gQoKX15O1R65F6LRroRhmX4laEOPWPz2khcKHHetLjS8qSJtM9xdMl8SMbPRUaaUvvI7kFBTLnrMk4eRXz7WLzCKDGg3WFpRPOf4Pf3PPSlsatx6eOOCs18uPb5WBylBkixQmh4QG0nrkO7Rwf3Q8Gk8tE/2DPmxFPEr+FRsEhP3hQIN3LOOdVPZ8MBvfn6SOPrMQM2UJmlCJf3uJNPgj95OvFRdh6UKgj0ki86IN6n+rD7ph5T2QIM63HPpn06aIDcKSTrh9ws1DrzLmjVNCtSPcpOjeIk0FNUAQEtW83ibJhLI5CkSiNyG1Gum8Tvf0aAoWSxjEQ3IT9B150I+H0wQRi3OEwcLhrJoo/sbAkvSCP0tYD3TU4YxTYrs/IKQSHoYJs60x4cctRzV3ozUkCdKtjCV4wtFVPSJIgxXEsEm1mlEetfTnfFXprYUdxHUYd0tbjTGsaLkCn0iUDfCbbBAqFdjW0Pn198Rg8ryka/EzMdMSFCn3GKJTmElcpUE88UYgo5yq6o5lXHQyi7neFQU4fbYzj+ZJWM5Xpk636lAL7qQxNYtVhKCimk3rRaJzDyvKyw/ZppFBcg1GHY/BBQ5HU2NEfId0LSKL7kogNfKe7tE9jDVND7sc0Ce0BmOR6Rng7a/URDy6aHfhzQ0gIkzqq5GbUITfE1pdaZJlcrDaEyDhnkEYKRQzIIrkGLfUivyPD09swtaF5JAEF3KchDAzzJTt4IqNhGtaiHlM3jNeh87JhadRalqTeVB1Rl86ywAm5nkzwMUvCtSpr1aHCOpd1Mo/VsZOKVKxQ2NZvgS6MzVsmXzUJm2TCtTRi42gIA65kajgAaRRdTQXWweQoT3GUs0BX0m24ih/Xc1uN5eLoclw9OGjSlP7BEgtIKnPuPN96qcUERuN+kmVXmCg+VigmM6AwLRTrwhn3Z/KIZpejj7CFQcq+aPBleqR5z/ltKj+KmiEzRN9ghym0LDNMJRP0GGc1JucnoU+X3HhL1zetU4dwLR1jtwlLCzZJWxorFLb1TFpoL2DG1LhPU3DQgcy1SKFmtcwluI6BSyey+QyFt15nAtNLiwnheTMAt75RPz7dygVMYHUFbGpWHYZDf8i8/WAQIgpbeptXKJKfUTJJHFR2mCF5FztThHVRwuS9Ldyzzb/sQgzhzDE8zI1ANIeLDII7Mk/SI+WhTqzl+emamUVwpFDSMgolaj0YaNbuJOFjpqWgUKLWHzPXkjgoI5TRkAThZ4auEPAh0iyjDo4XEMMIgqcqOaeAV3NIYaxIMUPnHFlerp1aRAQP+Zbeha2v6azdiR2UXEvj1gvpNXCwWntJ/y/z7givcqyLEumuadZnR7/6YHyE00jGyM2EKeDe5zwkbhTahD1XJ42j5lbzAKmZS2tEliujDhdhRicz8q9jN7zAD9mWRgplKGSuxXFQyWcEPZpPk0dp+jxxUTI6IQXRrJ7f93GheSmDNGdOI56WbINrHJ3XJ9eDLtD14pjtu9geZPo+bD0fMFKSuOG09Z28QmE90Uwc5FgrQzIjKp1YVGDwX2eZGoPFiTN2le6K9MIAwmdogcFxlhVuIhIWr1wzEzK3HNWoUrbvaUtlxsIVL4kev6vGxpZx653MtTgOymSVYUhSsWDltHnNxaJi6mSxDiqo0GrdEpiSC1vIJQWp7q35NKXjzVuP7vTh4WHq+gYz93IQBdzr+p410GBjEodryoZMkUJhBT2Ng+iQ3GLeNQ1Zkroo6aw7KhNu0cybhvCJzbu+kLpBLmPQ6ENAgcLXDcdTXbNcSu6rsMPkMpqKfsj0PaGtdzmm7wckfhOvkvvk1tNQoWQEKomDVockvqsyXycqWCdkLY+b1bvxOs1ZPGKceJPV52Hj7Jo9U3q5TErGRtTDXFdBZaxZ1Hox4NLWMxMn0NIVhZIR9ETJZMOreD4tJyphcFN6NEj3uFk8bpD+8mi8WmjDdB84jlnlheHput2nWHsA33+iL1qjDjW29YyFhNanLe2E+ZJM6+M4iMoZIxb34ZBkZS/OVklhxUzxuM8Z4K/2l7cn+SG7SL14Ng1E3zhem0XimZghFigaW7KtD/s+48j6caYwI9TLuPWMMbxO2sS3GLGIRYUNuaqhe0inWJpoCMjIVNS5AWqzW8948WC32YGaTYE2J+tKD3sew75Yx2daGrWedQ+3FskwFVskY3uUUNDT1sO1eJZHWyPUZSbkAj/OKYdtWjQp33BLHr5i2r7DkWTOkdI9l6YVermEGXq0K0sXeJtLhRc8cQpKVFctp8S2vnlNZslbmJYmrWccrMtU0M2coKOosO4h2DgcpvwQBlQRoy8Sj8VSzR0JFgMnE5nlk6BbWx1i2LlgHKxWJ/k81vEyqw7HYetZRFvNtA1T1u2LXMQHxj1EexQL+hPjjmyFllNkXUFgFEYNoOOoK3La55gMnxYw8QXbfwWaBU1R0I5YECFoM1pJVDxukIaWl9GMRI+1+3cctfsum9Ns/hkjlX1mPgRUN2YhQHhTuxNHcVTQGbctcnDLHscE3A2qUCHepxrhoJt8tVDIutcwEluMeII73c/kzLawkEMPpjVNEkVRqpiqzjEJzETHg/JJedKhEgVWl9VvExJ6srwrsCmkATcs0CUpx4ySSexRiRUVUD6o/FzGvwYmokKSW3FdW4c4zPwmoyjiOCRluE+62eq55vEAF7F7cyQPFPiSnaAdhNmKLNJblDLRzhSbocWSqUw4HDvF9SdmH+UWx4hZFAeFg4IZ0hCF43ZCHjtFRtHLQyE2jwdLzokrAHjTSRXFwTXnZ2fo2zgvmoGKcV4D3V6k/uCcqTorRjqeIk1FusP5pjmkM+tpUnNsCWq7rYBMDFj9PuCCtpmpqyguuGRmm0WKOsFtP8y5LuPegPQGri9YcfqxWF1icZjS7tXMoc7cektWljVCRzTusu4UxnmXR7f1eifnaMUpABS/fqojTywMBMDbhk5KFVydYHzAWddsR0Kv4L1s7RPry7D+COYx8LFYUcYmdvCZt+l8xsFtA1+EW5tEpUr41Y5l2CupB9PjrEXW5m5txXN9uYv1uKSWtXs4T2BZ3c7BVrNupQqu2elaVuP6HLA3U1yni76F3mr60DEzs82zPubWydKy+ji9NE5rMw+O7peLky2Wqkf38H6rv+xEwlM8hUhGlfiV+pIeRGn9+lo3mQFOXxNl6qh9WjL26bRaPYD4oWNl6poOqtVTeGrxdMEo+Ga1WmVfBXaHqenMJFFBtMZYOX7SbTC5/maYGThg9GTzdHxyUo2GWbF5OSDGUC65q/5eaQrelHVP3eTVIB5nBcfntL/G/aSkto31yxnJLlYXluAITCkNHbbw4i5n3bF5C5w7TP+acEEqZ6UWx6CiktU8B/HsZi1EsTi+73eYJFfccFo8j2WAUkXN6t6INBd3kOgP6ufQNYnoohNyOr7sLLp9wsEoxO6PJYIHD/v+pJlMC2xVOxDn27WWQAZ3p+k6hYPLiUWgH2+r6bXm+PY8nQrvZnxtLMfO3Ivfn3uk32Eu4suw4LgzPmAXRNA80hJe12rzNV8w1hc647oRXLNhNRp/3i/qt53O7WJx/2e3gXXMYHQMsjyuTpiSWggmOGtwe3cyro5PjjvXfSLMp3sFbQj+Z+P+6O4Srl+e17v4YgXw9ydHxyf02u3A4m6rMd1ZRmYuCGsDGxPMo0ff54ygB+2GB5yHF+9u6ctoMro7wUUucBmvdybdPkd0/0HiFc/aXOgMbvIs8BzcCyXN9Ru64/iq2y7PdGI1LDbHL2J9ASFWv9+3CG5WMaP5OLGthtu4wnVCN0F9KBVkF/cMxXvxVvgffiski+TmgrQZe6+gt7AwQ7PTizQjYvf4nj0Kt6kh/agN6AcMTQnu1htLdlCsEt0XezYcqgGQOhzOXLNG65jBA2jphpFd5Corw5anIzk+k1AWe1O15dDr82DWpj4Vr01Vn17SvSD6Jab8XBBfTu4dxd+nDxhFD2jFL5Pbrtqax8+Zt4AlFb5QehgJ3bvG2mG6wl624ismqWcqSr5MWdJ6tVqtp+W2Quej6xXW8yzhJbgmabUMrRGy+N7MjuO8HD+AeRkvyfRVyfWS0jKsRXXxpjnvfx8B52FINc63zsnPXs74OxGv4Wo8cA2qxXEDPIef/Xi65hRX2fYotWMCUd9EZjtHvSxlt/bI75QgpuWi0b4JMghw23SDOVpKcPeKp4N1pY9vhybRoQFQQHepqopViSMgx/hZNB+x5LeyFMQzo3Flpj8aefg1sAMDunzr9J7Oer4TnyjJ5ZqpuAAOdyFzQLcmFYmRRQr/AYOcUHeVGnnqW6vbub2DrMZgcj5G96wIQPWHN5ca81Kl135wZ4/ByKO2NiKrT3EMlguIeI6Ozo+B6CpVasVjOj1YoeoKnWTpOEPnRxnq1LN0S6/C20/Gp1E9XXG8JPr09QXOIpaqTN1Hf4Tr/WkNB5rtRmM5gcefo7eDtQDFNZR3nF+gdY94D8XPu2wQ5zVAwTyB2QR7PIoAYiFHv3u/uO2g3xfVObwD0McQnXmaK8+KLhVTxQaIeGoILVWxuteLOjirgC9aWvzZQF6g4ik4/vlVPhmMuCv9MJhHx4ZgMc59Hb3pgxDgZwN4HWGE1MD1HWsrPHmt7c5UUKUIEbRMd7AAIY0QfnbTX01RuHaN61iGG9Z3oPMUouSsCYamzd9fSHNaqHlaPbm7ndA9CUZPz61jCU+CAc2DU3Mr6zQ+oLXPUZO1T6ehURoDXVLzc3u7mAyoQeZwn4lH8+V1SVJtqno6x/Un66tVfhqyrWYzbDFuD4HmMmsk7wc5WuNzRKFosppagAja8+1pTX6lryDK5hBiXcza/TysITiANj65vDvqLO6vl0vaZPSL1ux0S2jeVMgUYnKMlxiGoU5IPriFQ3vmKnia1Ns8Ip5uFmzdn7wM4WWIwL1TTLossP6FrnojWFDNerceOrXRiqCEhivkTmOKIgOMAbRKhfr6bwLIEkaxNOr5H7i41ayOjzv1yaCP+DhEJxjeHB31QH1ypzSUqWFrMVAJo5FMjd8HkaRAJNu9W7fk6DUYT85vJ12AGK5mAXxY/wLQAFZp43qzZwiTH7gZWHZ7xl65DNGG+b+eVyK7mNN/C1tRSZ6OMTPXsOjIcrx5YLsP7bK8ev5csslXtG1bvOFKsstivKMZLkC9urq6aWGFeCaMo3sY6cIb1mlvIlxrk9m74VmUzYPxXX2Ay6twPwQPICq1TFopjJr3ou3o0m33YkR0P4Nw9XuOLr788cd8Q5T2P21FkpCEbD16UYLBM6le3l4jSNT1LdU1e3T5b4xQpOuhI45lmJbwbX8zzu0rAPp9026Ob1l6/xy1fcGqry1Ui1kJ/tf5ArQOLuubt4bTdspHfq9SkSs5YGtQsjg3AP1r836SP2srMzyT4n79YEWUJ0cL9L9A6fgqgIwr4YCFFa18uHO1HWM53AQyhLkZZwR0E07u3XuurJDk6ul0JKt8ACV4mThj6QWuGe9gxu+VKofb2+He0mdX29Gu2htpP8G5VnBDoF83b2T2pt0UXiBx6uRmy3Hq6G7Rxf3MnDmwMlq2u1fS9nf36W5c2+Fm4VdXO4Bie3cD2v0MzLU4Q6CbN6cj3s88eIY32cKA4tbp5e0S153pc9WNvExRa09V9e+Li4uzuIm41z0g3d3fuTqLIO3nMcYwN+KMgG7kKPnZu0gmUHGPJFrjboDEtkOUe2WcsNJBZcy/ANSrpJFXF1dnwNntqzO6N/wqJfv/b8IZAvWe2VnRfzlseStUAlBxrSSufdZ9Ozq+E0K9WQujn2jrl6cUKjD0jG60fXYBSEGmd9fSMzC3zy7+eJajoI5+joXJQuW6HZBZYGZrSteiQCBguj5OtTKhk/N/CDWU4LNIkK8ucJ/bq6sVqNEm+Bvp7AaA/vXcDqiC/QtOYTEdOjU6VMr04aXaFOcE8kfGEOfrBTtYkbUXiBRkeXv1HIfNKCPJjcxL6Autkd1fcq7Dg4ebRtIZVM20fWPd0aZAxvebzGCNWAyyTH+evQiQldw/vod21Gi5szWj9f0zEc8S34v3gDDnxuatkonw48vFTcLWqwj02cUF/Xm1GdsqQ7+GpykRHdN87fxW1MR4+tXBnfbcrsxA3tebm5tktMZAU6RnZ5sRsgz9K9JFxpTHbSuUvJ8U/PojHVa6N+7luLO/f2GwMjIccjgzjtfiRIb+8yNCBqwTXb9W6OVc3/lHHFanrPfOnEhPkpCtN4nBiQfu1U2KdBNnz6jgIkOjh41k0TWMdnJOY9Sdv2iQ5kicrfO4R20zObnN+PHPTcrXENXZxU3K07ObtUM25Gc8QqnSNZ5cA/cOt+Gpaej2UQdXSKtHkdDtaGQ7ETH9+x83GRlGoPT3ixuKFAfu1VWGs1cRzkhwidGauS1MDRpKQZuT+TQ500awf/W2/zFV8nuvEgE6ea8nKfFJD4Rzvv/x5ebLlxjsVQT06oYi/YJIL76cMVbdRFwAAAVPSURBVDDRUwCc36Ojg4QRVsjgQTZYfqIIo1qhFikpQf24Y4PKuUOgSICnEDtDuZye9SDo379+QQrBRiL8hcotg/TqyxX4FzdfQpw/kiOSWmUIdOlqCALR9rTVK1RiUfrQo6BqmWM66HkDsk+IKpZYdhujv/74EqNFuBdfQn10QZHeAEgwKV9ClH/881d6li3uj1ay/R49JRZiM6lUgE4Md7r2P/b04hrrtWDRj1Rq+7iGyRQExiAIzo+vEViwPRdfviDiqxv6L6jZm4iXCPNHfKY8LZZoiaBuyUOhMPU4WmpTi8XoQ+wLS20GqiqCQg56lanJF2rGXFHZCATA/vVPjDYkQBYjpCi/UpjxkHdGcwNXskkunQSFFxm2lLxu/vFnZpqJB4Gr2E2deGjjRFtwC+JDdrddiIF+fP+K+L6wCBHkP1+///BY/3Lu9iR5quM6Cx4iJgmXpXBG8IlA2bEaaAWwemRekaeqgRmPGeJnmk/C2bAf34H++krpL/z9B93gjBWAcAkw/0jmpohKDiKzGnPOpv85p6DW4mNRBN8sTT2wBqJKcB0bHn1K/Gkr40zFjY1mnoS4C9jPCURi4Rhw0A2Cx4HeTd0jofVZR6knNoXotlyeQn9PCeYl8cxTYVrYc401weWmAMGbqQIurxii3uVtev52zQW1qyZAP+X8yJDk5ASY8HRdZIKIi0A43JcD/jLmQct78QQ2Ds/WLBdqOiKdOriZDtjR8KgneRgJzupSuw8laRZLKHHsdhvcwWl45j2uceo5niLz4VqxF4guc9tr4SIysScXcC0VsFATZSVxpj/zSFsk5qBigR4wrIRnSTu9Aj9DO2sOZzXcsjoElDvbNf3bUUADPQi0wpqv2TIwmAjzYJTIw+ceU0yplj1Mcoprv7lQL+k9XAaPuiV0WR1V9cI+oebTaAXJWb1wqYeazHHbytABuyX5JO2Y3+TwdNlmhBNGF/CUuodTAXd36Kk6RF0AOHSl8ARtwW33puDgepVChfE/XNzZmQi6AVFMmervhPT1hVQfTrzCnCMHgYZm43ZElRGhLqpYe/RGQ8zJ4FhEVhk9ukqTeDKLFBdXmAaN1iCKKQ2ZR/qfL7kxlR9T3xyNK3o3qmC0nBbuksrDMKXbCZfKuC6eM2o4H9fCpd4lBilIQAlFFrxcvhakDoVuf/yJvZtJTHUkHpQ5nOF5zF65PDRwnQzuk8cZD7wNXK3pnNGG++WaA0hF5ugNHNsu8rZnMo6z0TI/V+euUMVNWhdNzOMKaxMHnYanv4PstnW4IrWQebzq8i54CCKTaUQTDGaUMxgDLHjv2Mr6VxNfy5tNYSjiWSwYADxxI01UDfQMXAEvqHpbUtsFqqkSWVBw40nWi3KGv4PKXSXRDLK5NONRE9u2W4EoHVDwWk3BddA6Ih2Ckj6soSuf3k78xzlrsXS1/dtoojxJSuYwe7D9dlsryaBfhnxPtadmu4RbsVHOcjYWh81yUzsMzsD8qLzYu0hSAj3TcsPzRzrRTS2g20GjY0u9W4OjS/3tDT4xu7f170pSW3WErNNHCwWMMCwrSzVdFaUpxLPe1FTWHBuLaxCHtd9M4a4nvuf6K9NU0Z+GM2/pjoq1xBidr+TICT0e7accTvYxVDKHc2NtuRT1ZSOHlnD5USoYI7v924ttjioKXQK7fhiu7QM8IOEVFde/IfFy2w3CE0SfBYyf07qm2u/hx7+PRM2cqbj4Zu0kPr1m6HRl9rpttv5tRBdjq4E/16NkWVK17Yx8ur1+6d+jgV5BolTp1UxzOp26T09YbG6auSXQ/9F/9B9toP8Hy8Csl1RpbwwAAAAASUVORK5CYII=' alt='openchat'/>
                <ImgWrapper src='data:image/png;base64,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' alt='openchat'/>
            </WrapImgWrapper>
            <WrapTxtWrapper>
            <TextWrapper type={type} color={color}>
                두산 VS LG 06:00
            </TextWrapper>
            <TextWrapper type={type} color={color}>
                 204명
            </TextWrapper>
            <Button>참가하기</Button>
            </WrapTxtWrapper>
        </Mainwrapper>
    )
}

export default OpenChatCard

type Textprops = {
    children?: string,
    child?: string,
    time?: string,
    person?: string,

    color?: string,
    type?: string
}