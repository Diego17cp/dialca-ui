export const BasicRadioUsage = () => {
    return (
        <code>
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ RadioInput }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'dialca-ui'</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-violet-400">import</span>{" "}
            <span className="text-sky-300">{"{ useState }"}</span>{" "}
            <span className="text-violet-400">from</span>{" "}
            <span className="text-emerald-300">'react'</span>
            <span className="text-gray-400">;</span>
            {"\n\n"}
            <span className="text-sky-300">export</span>{" "}
            <span className="text-sky-300">default</span>{" "}
            <span className="text-violet-400">function</span>{" "}
            <span className="text-indigo-400">App</span>
            <span className="text-purple-400">()</span>{" "}
            <span className="text-purple-400">{"{"}</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">gender</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setGender</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">""</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">plan</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setPlan</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">""</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n    "}
            <span className="text-violet-400">const</span>{" "}
            <span className="text-gray-400">[</span>
            <span className="text-gray-300">terms</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-gray-300">setTerms</span>
            <span className="text-gray-400">]</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-indigo-400">useState</span>
            <span className="text-purple-400">(</span>
            <span className="text-emerald-300">""</span>
            <span className="text-purple-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n\n    "}
            <span className="text-violet-400">return</span>{" "}
            <span className="text-gray-400">(</span>
            {"\n        "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n            "}
            <span className="text-gray-500">{"// Basic radio group"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">RadioInput</span>
            {"\n                "}
            <span className="text-indigo-400">name</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">gender</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">gender</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setGender</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">[</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"M"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Male"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"F"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Female"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>{" "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"O"</span>
            <span className="text-gray-400">,</span>{" "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Other"</span>{" "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-gray-400">]</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Radio with descriptions"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">RadioInput</span>
            {"\n                "}
            <span className="text-indigo-400">name</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">plan</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">plan</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setPlan</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">options</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-400">[</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                        "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"basic"</span>
            <span className="text-gray-400">,</span>
            {"\n                        "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Basic Plan"</span>
            <span className="text-gray-400">,</span>
            {"\n                        "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"$9.99/month - Essential features"</span>
            {"\n                    "}
            <span className="text-purple-400">{"}"}</span>
            <span className="text-gray-400">,</span>
            {"\n                    "}
            <span className="text-purple-400">{"{"}</span>
            {"\n                        "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"pro"</span>
            <span className="text-gray-400">,</span>
            {"\n                        "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"Pro Plan"</span>
            <span className="text-gray-400">,</span>
            {"\n                        "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">:</span>{" "}
            <span className="text-emerald-300">"$19.99/month - Advanced features"</span>
            {"\n                    "}
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-gray-400">]</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n\n            "}
            <span className="text-gray-500">{"// Single radio mode"}</span>
            {"\n            "}
            <span className="text-gray-400">&lt;</span>
            <span className="text-pink-400">RadioInput</span>
            {"\n                "}
            <span className="text-indigo-400">name</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">terms</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">value</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">terms</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">onChange</span>
            <span className="text-gray-400">=</span>
            <span className="text-purple-400">{"{"}</span>
            <span className="text-gray-300">setTerms</span>
            <span className="text-purple-400">{"}"}</span>
            {"\n                "}
            <span className="text-indigo-400">label</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">I accept the terms and conditions</span>
            <span className="text-gray-400">"</span>
            {"\n                "}
            <span className="text-indigo-400">description</span>
            <span className="text-gray-400">="</span>
            <span className="text-emerald-300">By checking this box you agree to our privacy policy</span>
            <span className="text-gray-400">"</span>
            {"\n            "}
            <span className="text-gray-400">/&gt;</span>
            {"\n        "}
            <span className="text-gray-400">&lt;/</span>
            <span className="text-indigo-400">div</span>
            <span className="text-gray-400">&gt;</span>
            {"\n    "}
            <span className="text-gray-400">)</span>
            <span className="text-gray-400">;</span>
            {"\n"}
            <span className="text-purple-400">{"}"}</span>
        </code>
    );
};
