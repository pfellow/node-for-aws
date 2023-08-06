import { j as e, r as j, R as d } from './index-582f0a2c.js';
import { s as c } from './styles-1b0f9c50.js';
import { C as y, P as w } from './Preload-e7e51eef.js';
import { L as v, O as N, u as _ } from './Loader-7adc96e4.js';
import { S, s as p } from './SectionWrapper-45405599.js';
import { m as u } from './motion-0e3487c0.js';
const C = () => {
    const s = _('./iphone/scene.gltf');
    return e.jsxs('mesh', {
      children: [
        e.jsx('hemisphereLight', { intensity: 1 }),
        e.jsx('spotLight', {
          angle: 2,
          penumbra: 1,
          intensity: 0.5,
          position: [-0.2, 0.5, 0.2]
        }),
        e.jsx('spotLight', {
          angle: 1,
          penumbra: 1,
          intensity: 20,
          position: [-0, 0, -2]
        }),
        e.jsx('primitive', { object: s.scene, scale: 1.2, position: [0, 0, 0] })
      ]
    });
  },
  T = () =>
    e.jsxs(y, {
      shadows: !0,
      frameloop: 'demand',
      gl: { preserveDrawingBuffer: !0 },
      camera: { fov: 7, near: 1, far: 50, position: [-5, 3.5, 8] },
      children: [
        e.jsxs(j.Suspense, {
          fallback: e.jsx(v, {}),
          children: [
            e.jsx(N, { autoRotate: !0, enableZoom: !1, enablePan: !1 }),
            e.jsx(C, {})
          ]
        }),
        e.jsx(w, { all: !0 })
      ]
    }),
  m = { _origin: 'https://api.emailjs.com' },
  L = (s, t = 'https://api.emailjs.com') => {
    (m._userID = s), (m._origin = t);
  },
  x = (s, t, r) => {
    if (!s)
      throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    if (!t)
      throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    if (!r)
      throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    return !0;
  };
class h {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : 'Network Error');
  }
}
const f = (s, t, r = {}) =>
    new Promise((a, i) => {
      const n = new XMLHttpRequest();
      n.addEventListener('load', ({ target: o }) => {
        const l = new h(o);
        l.status === 200 || l.text === 'OK' ? a(l) : i(l);
      }),
        n.addEventListener('error', ({ target: o }) => {
          i(new h(o));
        }),
        n.open('POST', m._origin + s, !0),
        Object.keys(r).forEach((o) => {
          n.setRequestHeader(o, r[o]);
        }),
        n.send(t);
    }),
  z = (s, t, r, a) => {
    const i = a || m._userID;
    return (
      x(i, s, t),
      f(
        '/api/v1.0/email/send',
        JSON.stringify({
          lib_version: '3.11.0',
          user_id: i,
          service_id: s,
          template_id: t,
          template_params: r
        }),
        { 'Content-type': 'application/json' }
      )
    );
  },
  q = (s) => {
    let t;
    if (
      (typeof s == 'string' ? (t = document.querySelector(s)) : (t = s),
      !t || t.nodeName !== 'FORM')
    )
      throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    return t;
  },
  E = (s, t, r, a) => {
    const i = a || m._userID,
      n = q(r);
    x(i, s, t);
    const o = new FormData(n);
    return (
      o.append('lib_version', '3.11.0'),
      o.append('service_id', s),
      o.append('template_id', t),
      o.append('user_id', i),
      f('/api/v1.0/email/send-form', o)
    );
  },
  O = { init: L, send: z, sendForm: E },
  F = () => {
    const s = d.useRef(),
      [t, r] = d.useState(!1),
      [a, i] = d.useState({
        name: '',
        organization: '',
        email: '',
        message: '',
        phone: ''
      }),
      n = (l) => {
        const { name: g, value: b } = l.target;
        i({ ...a, [g]: b });
      },
      o = (l) => {
        l.preventDefault(),
          r(!0),
          O.send(
            'service_td4vwms',
            'template_cdfdswc',
            {
              from_name: a.name,
              organization: a.organization,
              phone_number: a.phone,
              to_name: 'Sergey Shilovskiy',
              reply_to: a.email,
              to_email: 'pfellow@proton.me',
              message: a.message
            },
            'X4QinzKCOooCWBQEV'
          ).then(() => {
            r(!1),
              alert('Thank you! I will get back too you soon.'),
              i({
                name: '',
                organization: '',
                email: '',
                message: '',
                phone: ''
              });
          });
      };
    return e.jsxs('div', {
      className:
        'xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden',
      children: [
        e.jsxs(u.div, {
          variants: p('left', 'tween', 0.2, 1),
          className: 'flex-[0.75] bg-black-100 p-8 rounded-2xl min-w-[35%]',
          children: [
            e.jsx('p', {
              className: c.sectionSubText,
              children: 'Get in touch'
            }),
            e.jsx('h3', { className: c.sectionHeadText, children: 'Contact' }),
            e.jsxs('form', {
              ref: s,
              onSubmit: o,
              className: 'mt-12 flex flex-col gap-4',
              children: [
                e.jsxs('label', {
                  className: 'flex flex-col',
                  children: [
                    e.jsx('span', {
                      className: 'text-white form-medium mb-1',
                      children: 'Your Name'
                    }),
                    e.jsx('input', {
                      type: 'text',
                      name: 'name',
                      required: !0,
                      value: a.name,
                      onChange: n,
                      placeholder: "What's your name?",
                      className:
                        'bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
                    })
                  ]
                }),
                e.jsxs('label', {
                  className: 'flex flex-col',
                  children: [
                    e.jsx('span', {
                      className: 'text-white form-medium mb-1',
                      children: 'Your Organization (optional)'
                    }),
                    e.jsx('input', {
                      type: 'text',
                      name: 'organization',
                      value: a.organization,
                      onChange: n,
                      placeholder: "What's your organization?",
                      className:
                        'bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
                    })
                  ]
                }),
                e.jsxs('label', {
                  className: 'flex flex-col',
                  children: [
                    e.jsx('span', {
                      className: 'text-white form-medium mb-1',
                      children: 'Your Email'
                    }),
                    e.jsx('input', {
                      type: 'email',
                      name: 'email',
                      required: !0,
                      value: a.email,
                      onChange: n,
                      placeholder: "What's your email?",
                      className:
                        'bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
                    })
                  ]
                }),
                e.jsxs('label', {
                  className: 'flex flex-col',
                  children: [
                    e.jsx('span', {
                      className: 'text-white form-medium mb-1',
                      children: 'Your Phone (optional)'
                    }),
                    e.jsx('input', {
                      type: 'phone',
                      name: 'phone',
                      value: a.phone,
                      onChange: n,
                      placeholder: "What's your phone number?",
                      className:
                        'bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim'
                    })
                  ]
                }),
                e.jsxs('label', {
                  className: 'flex flex-col',
                  children: [
                    e.jsx('span', {
                      className: 'text-white form-medium mb-1',
                      children: 'Your Message'
                    }),
                    e.jsx('textarea', {
                      rows: '5',
                      name: 'message',
                      required: !0,
                      value: a.message,
                      onChange: n,
                      placeholder: 'Type your message',
                      className:
                        'bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-meduim resize-none'
                    })
                  ]
                }),
                e.jsx('button', {
                  type: 'submit',
                  className:
                    'bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl',
                  children: t ? 'Sending...' : 'Send'
                })
              ]
            })
          ]
        }),
        e.jsx(u.div, {
          variants: p('right', 'tween', 0.2, 0.5),
          className:
            'xl:flex-1 xl:h-[600px] sm:h-[550px] h-[400px] xl:max-w-[65%]',
          children: e.jsx(T, {})
        })
      ]
    });
  },
  W = S(F, 'contact');
export { W as default };
